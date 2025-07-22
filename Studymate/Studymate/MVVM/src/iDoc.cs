using System;
using System.Collections.Generic;
using System.IO.Packaging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Studymate.MVVM.Model;

namespace Studymate.MVVM.src
{
    public class iDoc : iData
    {
        private DateTime _createdDate;
        private string _name;
        private int _id;
        private string _description;
        private string _filePath;
        public iDoc(string n, int id, string des, string fn) 
        {
            _name = n;
            _id = id;
            _description = des;
            _createdDate = DateTime.Now;
            _filePath = fn;
        }
        public string getName()
        {
            return _name;
        }
        public int getID()
        {
            return _id;
        }
        public string getDescription()
        {
            return _description;
        }
        public string getFilePath()
        {
            return _filePath;
        }
    }
}
