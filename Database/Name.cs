using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    class Name
    {
        public string NameID { get; set; }
        public string ChemID { get; set; }
        public string Denomination { get; set; }
        public string Language { get; set; }
        public string Type { get; set; }
        public string Creation { get; set; }
        public string Supplement { get; set; }
        public string Description { get; set; }

        public Name(int nameid, int chemid, string denom, string language, string type, string created)
        {
            this.NameID = nameid.ToString();
            this.ChemID = chemid.ToString();
            this.Denomination = denom;
            this.Language = language;
            this.Type = type;
            this.Creation = created;
        }

        public string Output()
        {
            string outitgoes = NameID + "," + ChemID + "," + Denomination + "," + Language + "," + Type + "," + Creation + "," + Supplement + "," + Description;

            return outitgoes;

        }


    }
}
