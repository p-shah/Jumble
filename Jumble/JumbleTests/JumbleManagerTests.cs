using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jumble;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jumble.Tests
{
    [TestClass()]
    public class JumbleManagerTests
    {
        [TestMethod()]
        public void GenerateLetterScroeTestForLetterATest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            String expectedLetterScore = "A";
            String actualLetterScore = jumbleManager.GenerateLetterScroe("9");

            Assert.AreEqual(expectedLetterScore, actualLetterScore);
        }

        [TestMethod()]
        public void GenerateLetterScroeTestForLetterBTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            String expectedLetterScore = "B";
            String actualLetterScore = jumbleManager.GenerateLetterScroe("11");

            Assert.AreEqual(expectedLetterScore, actualLetterScore);
        }

        [TestMethod()]
        public void GenerateLetterScroeTestForLetterCTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            String expectedLetterScore = "C";
            String actualLetterScore = jumbleManager.GenerateLetterScroe("12");

            Assert.AreEqual(expectedLetterScore, actualLetterScore);
        }

        [TestMethod()]
        public void GenerateLetterScroeTestForLetterDTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            String expectedLetterScore = "D";
            String actualLetterScore = jumbleManager.GenerateLetterScroe("13");

            Assert.AreEqual(expectedLetterScore, actualLetterScore);
        }
        [TestMethod()]
        public void GenerateLetterScroeTestForLetterFTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            String expectedLetterScore = "F";
            String actualLetterScore = jumbleManager.GenerateLetterScroe("14");

            Assert.AreEqual(expectedLetterScore, actualLetterScore);
        }

        [TestMethod()]
        public void CheckAndCompareTestForAPassingConditionTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            Boolean expectedResult = true;
            Boolean actualResult = jumbleManager.CheckAndCompare("lucky", "lucky");
            Assert.AreEqual(expectedResult, actualResult);
        }

        [TestMethod()]
        public void CheckAndCompareTestForAFailingConditionTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            Boolean expectedResult = false;
            Boolean actualResult = jumbleManager.CheckAndCompare("luckyYes", "lucky");
            Assert.AreEqual(expectedResult, actualResult);
        }

        [TestMethod()]
        public void GetScoreTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedScore = 2;
            jumbleManager.AddPointToScore();
            jumbleManager.AddPointToScore();
            int actualScore = jumbleManager.GetScore();

            Assert.AreEqual(expectedScore, actualScore);
        }

        [TestMethod()]
        public void AddPointToScoreTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedScore = 2;
            jumbleManager.AddPointToScore();
            jumbleManager.AddPointToScore();
            int actualScore = jumbleManager.GetScore();

            Assert.AreEqual(expectedScore, actualScore);
        }

        [TestMethod()]
        public void GetTotalCorrectAnswersTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedTotalCorrectAnswers = 2;
            jumbleManager.incrementTotalCorrectAnswers();
            jumbleManager.incrementTotalCorrectAnswers();
            int actualTotalCorrectAnswers = jumbleManager.GetTotalCorrectAnswers();

            Assert.AreEqual(expectedTotalCorrectAnswers, actualTotalCorrectAnswers);
        }

        [TestMethod()]
        public void incrementTotalCorrectAnswersTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedTotalCorrectAnswers = 1;
            jumbleManager.incrementTotalCorrectAnswers();
            int actualTotalCorrectAnswers = jumbleManager.GetTotalCorrectAnswers();

            Assert.AreEqual(expectedTotalCorrectAnswers, actualTotalCorrectAnswers);
        }

        [TestMethod()]
        public void GetTotalQuestionsTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedNumberOfQuestions = 3;
            jumbleManager.SetTotalQuestions(3);
            int actualNumberOfQuestions = jumbleManager.GetTotalQuestions();

            Assert.AreEqual(expectedNumberOfQuestions, actualNumberOfQuestions);
        }

        [TestMethod()]
        public void SetTotalQuestionsTest()
        {
            JumbleManager jumbleManager = new JumbleManager();
            int expectedNumberOfQuestions = 2;
            jumbleManager.SetTotalQuestions(2);
            int actualNumberOfQuestions = jumbleManager.GetTotalQuestions();

            Assert.AreEqual(expectedNumberOfQuestions, actualNumberOfQuestions);
        }
    }
}