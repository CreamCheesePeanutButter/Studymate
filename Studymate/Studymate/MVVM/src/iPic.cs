using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using Studymate.MVVM.Model;

namespace Studymate.MVVM.src
{
    public class iPic : iData
    {
        private DateTime _createdDate;
        private string _name;
        private int _id;    
        private string _description;
        private string _filePath;
        iPic(string n, int id, string des, string fn)
        {
            _createdDate = DateTime.Now;
            _name = n;
            _id = id;
            _description = des;
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
