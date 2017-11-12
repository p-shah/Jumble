using Jumble.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Jumble
{
    public class JumbleManager
    {
        int score = 0;
        int numberOfQuestions = 0;
        int totalCorrectAnswers = 0;

        public JumbleManager() {

        }
        public int GetTotalQuestions()
        {
            return numberOfQuestions;
        }

        public void SetTotalQuestions(int numberOfQuestions)
        {
            this.numberOfQuestions = numberOfQuestions;
        }


        public int GetTotalCorrectAnswers()
        {
            return totalCorrectAnswers;
        }

        public void incrementTotalCorrectAnswers()
        {
            totalCorrectAnswers++;
        }


        public int GetScore() {
            return score;
        }
        
        public void AddPointToScore() {
            score++;
        }

        public Tuple<string, string> GetWordWithHint(string word)
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

        public Boolean CheckAndCompare(String stringOne, String stringTwo)
        {
            if (stringOne == stringTwo)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public String GenerateLetterScroe(String timeTaken)
        {
            int minutesTaken;
            String letterScore = "A";

            try
            {
                minutesTaken = int.Parse(timeTaken);

                if (minutesTaken < 10)
                {
                    letterScore = "A";
                    return letterScore;
                }
                else if (minutesTaken == 11)
                {
                    letterScore = "B";
                    return letterScore;
                }
                else if (minutesTaken == 12)
                {
                    letterScore = "C";
                    return letterScore;
                }
                else if (minutesTaken == 13)
                {
                    letterScore = "D";
                    return letterScore;
                }
                else
                {
                    letterScore = "F";
                    return letterScore;
                }
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {

            }
        }
    }
}