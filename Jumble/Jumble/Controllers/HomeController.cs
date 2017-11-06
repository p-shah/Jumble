using Jumble.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Jumble.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult GetAllDataFromCsvFile()
        {
            var dataFile = Server.MapPath("~/Files/riddle.csv");//where the riddles are hard coded at

            List<Data> result = new List<Data>();//this is a collection of Data objects

            if (System.IO.File.Exists(dataFile))//fires if the file exists
            {
                var userData = System.IO.File.ReadAllLines(dataFile);
                if (userData != null)//fires if the file has content inside
                {
                    for (int i = 0; i < userData.Length; i++)
                    {
                        var line = userData[i];//this is each line or each riddle

                        Data dataOBJ = new Data();
                        //public string Riddle { get; set; }
                        //public Tuple<string, string> JumbleWord1 { get; set; }
                        //public Tuple<string, string> JumbleWord2 { get; set; }
                        //public Tuple<string, string> JumbleWord3 { get; set; }
                        //public Tuple<string, string> JumbleWord4 { get; set; }
                        //public string Answer { get; set; }

                        //this is a collection of Strings
                        var values = line.Split(',');
                        //if ther are no " characters, the first index will be the riddle and all of the preceeding indexes will be the answers to the word jumbles and 
                        //the last index will be the answer to the riddle

                        var currentIndex = 0;

                        if (values[currentIndex].Contains("\""))//fires for lines or riddles that are surrounded by " "
                        {//the first index will have a " character before the first half of the riddle
                            var myQuestion = "";

                            myQuestion += values[currentIndex] + ",";
                            currentIndex++;

                            while (!values[currentIndex].Contains("\""))
                            {
                                myQuestion += values[currentIndex] + ",";
                                currentIndex++;
                            }

                            myQuestion += values[currentIndex];
                            dataOBJ.Riddle = myQuestion.Replace("\"", String.Empty);//replaces the " character with an empty String
                        }
                        else//fires for lines or riddles that are not surrounded by " "
                        {
                            dataOBJ.Riddle = values[currentIndex];
                        }

                        dataOBJ.JumbleWord1 = GetWordWithHint(values[currentIndex + 1]);
                        dataOBJ.JumbleWord2 = GetWordWithHint(values[currentIndex + 2]);
                        dataOBJ.JumbleWord3 = GetWordWithHint(values[currentIndex + 3]);
                        dataOBJ.JumbleWord4 = GetWordWithHint(values[currentIndex + 4]);

                        dataOBJ.Answer = values[currentIndex + 5];

                        result.Add(dataOBJ);
                    }
                }
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        private Tuple<string, string> GetWordWithHint(string word)
        {
            char[] letters = word.ToCharArray();
            string hint = "";
            foreach (char c in letters)
            {
                if (Char.IsUpper(c))
                {
                    hint += c;
                }
            }
            return new Tuple<string, string>(word.ToLower(), hint);
        }

    }
}