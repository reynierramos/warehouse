﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Warehouse.Models
{
    public class WarehouseContext : DbContext
    {
        private IConfigurationRoot _config;

        public WarehouseContext(DbContextOptions options, IConfigurationRoot config)
            :base(options)
        {
            _config = config;
        }

        public DbSet<Frequency> Frequencies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySql(_config["ConnectionString:Warehouse"]);
        }
    }
}
