using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Warehouse.Models
{
    public class FrequencyRepository : IFrequencyRepository
    {
        private WarehouseContext _context;

        public FrequencyRepository(WarehouseContext context)
        {
            _context = context;
        }

        public void Add(Frequency frequency)
        {
            _context.Frequencies.Add(frequency);
            _context.SaveChanges();
        }

        public Frequency Find(int id)
        {
            return _context.Frequencies.FirstOrDefault(f => f.Id == id);
        }

        public IEnumerable<Frequency> GetAll()
        {
            return _context.Frequencies.ToList();
        }

        public void Remove(int id)
        {
            var data = _context.Frequencies.First(f => f.Id == id);
            _context.Frequencies.Remove(data);
            _context.SaveChanges();
        }

        public void Update(Frequency frequency)
        {
            _context.Frequencies.Update(frequency);
            _context.SaveChanges();
        }
    }
}
