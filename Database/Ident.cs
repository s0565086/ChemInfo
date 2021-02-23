using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    class Ident
    {
        public string ChemID { get; set; }
        public string CASRN { get; set; }
        public string GSBLRN { get; set; }
        public string Creation { get; set; }
        public string Description { get; set; }        

        public Ident(int id, string gsblrn, string created)
        {
            this.ChemID = id.ToString();            
            this.GSBLRN = gsblrn;
            this.Creation = created;

        }

        public string Output()
        {
            string outitgoes = ChemID + "," + CASRN + "," + GSBLRN + "," + Creation + "," + Description;

            return outitgoes;

        }






    }
}
