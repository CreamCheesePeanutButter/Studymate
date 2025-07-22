using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Studymate.MVVM.Model
{
    public interface iData
    {
        // Additional properties or methods can be defined here as needed
        public abstract string getName();
        public abstract int getID();
        public abstract string getDescription();
        public abstract string getFilePath();


    }
}
