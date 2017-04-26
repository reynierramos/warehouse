using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Warehouse.Models
{
    public class Frequency
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public DateTime DateCreate { get; set; } = DateTime.UtcNow;
    }
}
