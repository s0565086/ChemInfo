using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    class Update
    {
        public string UpdateID { get; set; }
        public string NameID { get; set; }
        public string Updatetime { get; set; }
        public string User { get; set; }
        public string Checktime { get; set; }
        public string Checkuser { get; set; }
        public string Description { get; set; }

        public Update(int updateid, int nameid, string updatetime, string user)
        {
            this.UpdateID = updateid.ToString();
            this.NameID = nameid.ToString();
            this.Updatetime = updatetime;
            this.User = user;
        }

        public string Output()
        {
            string outitgoes = UpdateID + "," + NameID + "," + Updatetime + "," + User + "," + Checktime + "," + Checkuser + "," +  Description;

            return outitgoes;

        }
    }
}
