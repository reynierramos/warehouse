using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Warehouse.Models
{
    public interface IFrequencyRepository
    {
        void Add(Frequency frequency);
        IEnumerable<Frequency> GetAll();
        Frequency Find(int id);
        void Remove(int id);
        void Update(Frequency frequency);
    }
}
