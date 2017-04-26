using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Warehouse.Models;

namespace Warehouse.Controllers.Api
{
    [Route("api/frequencies")]
    public class FrequencyController : Controller
    {
        private IFrequencyRepository _repository;

        public FrequencyController(IFrequencyRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Frequency> Get()
        {
            return _repository.GetAll();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var data = _repository.Find(id);
                return new ObjectResult(data);
            }
            catch (Exception ex)
            {
                return BadRequest($"Faile to get Frequency: {ex}");
            }
        }

        [HttpPost("")]
        public IActionResult Post([FromBody]Frequency frequency)
        {
            if (frequency == null)
            {
                return BadRequest("Faile to Add new Frequency");
            }
            _repository.Add(frequency);
            return Created($"api/frequencies/{frequency.Value}", frequency);
        }
    }
}
