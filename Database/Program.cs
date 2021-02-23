using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Database
{
    class Program
    {
        static void Main(string[] args)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load("DBCHEM.xml");
           
            XmlNode node = xml.DocumentElement;
            XmlNodeList nodeList = node.SelectNodes("/chemInfo/objekt");

            output(nodeList);            
        }

        static void output(XmlNodeList nodeList)
        {
            int ID_i = 1;
            int Names_i = 1;
            int Updated_i = 1;

            List<Ident> Identifications = new List<Ident>();
            List<Name> Names = new List<Name>();
            List<Update> Updates = new List<Update>();
            
            foreach (XmlNode objekt in nodeList)
            {
                XmlNodeList Sachlist = objekt.ChildNodes;

                string cas = "";
                string gsbl = "";
                string chemcreation = "";

                string denomination = "";
                string language = "";
                string type = "";
                string namecreation = "";

                int CAScount = 0;

                string updatedtime = "";
                string user = "1";

                chemcreation = objekt.Attributes["erstellt"].InnerText;

                foreach (XmlNode Sachverhalt in Sachlist)
                {
                    XmlNodeList Wertlist = Sachverhalt.ChildNodes;

                    if (Sachverhalt.Attributes["merkmal"].InnerText == "GSBL")
                    {
                        gsbl = Sachverhalt.SelectSingleNode("wert[@feld='GSBLRN']").InnerText;                             
                    }
                    else if (Sachverhalt.Attributes["merkmal"].InnerText == "NAME")
                    {
                        denomination = Sachverhalt.SelectSingleNode("wert[@feld='NAME']").InnerText;
                        language = Sachverhalt.SelectSingleNode("wert[@feld='SPR']").InnerText;
                        type = Sachverhalt.SelectSingleNode("wert[@feld='TYP']").InnerText;
                        namecreation = Sachverhalt.SelectSingleNode("wert[@feld='ERSTDAT']").InnerText;

                        Name inputname = new Name(Names_i, ID_i, denomination, language, type, namecreation);

                        Names.Add(inputname);

                        foreach(XmlNode Wert in Wertlist)
                        {
                            if (Wert.Attributes["feld"].InnerText == "NEUDAT")
                            {
                                updatedtime = Wert.InnerText;

                                Update inputupdate = new Update(Updated_i, Names_i, updatedtime, user);

                                Updates.Add(inputupdate);

                                Updated_i++;
                            }
                        }
                        Names_i++;
                    }
                    else if(Sachverhalt.Attributes["merkmal"].InnerText == "CASRN")
                    {
                        if (CAScount == 0)
                        {
                            cas = Sachverhalt.SelectSingleNode("wert[@feld='CASRN']").InnerText;

                            Ident identinput = new Ident(ID_i, gsbl, chemcreation);

                            identinput.CASRN = cas;

                            Identifications.Add(identinput);

                            CAScount++;
                        }
                        else if (CAScount>0)
                        {
                            cas = Sachverhalt.SelectSingleNode("wert[@feld='CASRN']").InnerText;

                            language = "N/A";

                            type = "Secondary CAS-RN";

                            namecreation = Sachverhalt.SelectSingleNode("wert[@feld='ERSTDAT']").InnerText;

                            Name inputname = new Name(Names_i, ID_i, cas, language, type, namecreation);

                            Names.Add(inputname);

                            foreach (XmlNode Wert in Wertlist)
                            {
                                if (Wert.Attributes["feld"].InnerText == "NEUDAT")
                                {
                                    updatedtime = Wert.InnerText;

                                    Update inputupdate = new Update(Updated_i, Names_i, updatedtime, user);

                                    Updates.Add(inputupdate);

                                    Updated_i++;
                                }
                            }
                            Names_i++;
                        }
                    }
                }

                if(CAScount == 0)
                {
                    Ident identinput = new Ident(ID_i, gsbl, chemcreation);                    

                    Identifications.Add(identinput);
                }

                ID_i++;
            }

            string pathID = @"C:\Users\Leo\Desktop\OutputDBID.txt";
            string pathNames = @"C:\Users\Leo\Desktop\OutputDBNames.txt";
            string pathUpdated = @"C:\Users\Leo\Desktop\OutputDBUpdated.txt";

            //file.WriteLine("{0},{1}", ID_i, gsbl);

            StreamWriter swID = new StreamWriter(pathID);
            StreamWriter swName = new StreamWriter(pathNames);
            StreamWriter swUpdate = new StreamWriter(pathUpdated);

            foreach (Ident ident in Identifications)
            {
                swID.WriteLine("\"" + ident.ChemID + "\",\"" + ident.CASRN + "\",\"" + ident.GSBLRN + "\",\"" + ident.Creation + "\",\"" + ident.Description + "\"");
            }

            foreach(Name name in Names)
            {
                swName.WriteLine("\"" + name.NameID + "\",\"" + name.ChemID + "\",\"" + name.Denomination + "\",\"" + name.Language + "\",\"" + name.Type + "\",\"" + name.Creation + "\",\"" + name.Supplement + "\",\"" + name.Description + "\"");
            }
            
            foreach(Update update in Updates)
            {
                swUpdate.WriteLine("\"" + update.UpdateID + "\",\"" + update.NameID + "\",\"" + update.Updatetime + "\",\"" + update.User + "\",\"" + update.Checktime + "\",\"" + update.Checkuser + "\",\"" + update.Description + "\"");
            }

        }


        static void compare(XmlNodeList nodeList, XmlDocument xml)
        {

            List<string> comparelist = new List<string>();

            foreach (XmlNode objekt in nodeList)
            {
                string text = objekt.InnerText;

                if (comparelist.Contains(text))
                {
                    objekt.ParentNode.ParentNode.RemoveChild(objekt.ParentNode);


                }
                else
                {
                    comparelist.Add(text);
                }

            }

            xml.Save("DBCHEM.xml");

        }

    }
}
