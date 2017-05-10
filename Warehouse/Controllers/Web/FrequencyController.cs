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

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Frequency frequency)
        {
            if (ModelState.IsValid)
            {
                _repository.Add(frequency);
                return RedirectToAction("Index", "Frequency");
            }
            else
            {
                return View(frequency);
            }
            //return BadRequest("Failed to create new Frequency");
        }

        [HttpGet]
        public IActionResult Edit(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            var data = _repository.Find(Convert.ToInt32(id));
            return View(data);
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            var data = _repository.Find(id);
            return View(data);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            try
            {
                _repository.Remove(id);
                return RedirectToAction("Index", "Frequency");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
