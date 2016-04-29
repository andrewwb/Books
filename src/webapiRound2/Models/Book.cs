using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webapiRound2.Models {
    public class Book {
        
        public int Id { get; set; }
        
        [Required(ErrorMessage = "You must provide a title!")]
        public string Title { get; set; }
        
        [Required(ErrorMessage = "You must provide an author!")]
        public string Author { get; set; }
        
        [Required(ErrorMessage = "You must provide a genre!")]
        [RegularExpression(@"^Sci Fi|Nonfiction|Fantasy$",
            ErrorMessage = "We only support Sci Fi, Fantasy, or Nonfiction")]
        public string Genre { get; set; }
        
        [Range(0, int.MaxValue, ErrorMessage = "Page Count can't be negative!")]
        public int PageCount { get; set; }
    }
}

/*

{
    "title" : "LotR",
    "author" : "JRR Tolkien",
    "genre" : "Fantasy",
    "pageCount": "7347.7"
}

*/
