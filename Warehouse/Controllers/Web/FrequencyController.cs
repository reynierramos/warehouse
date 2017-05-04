using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Warehouse.Models;

namespace Warehouse.Controllers.Web
{

    public class FrequencyController : Controller
    {
        private IFrequencyRepository _repository;

        public FrequencyController(IFrequencyRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            try
            {
                var data = _repository.GetAll().ToList();
                return View(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IActionResult Frequency(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            var data = _repository.Find(Convert.ToInt32(id));
            return View(data);
        }
    }
}
