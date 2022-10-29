using System;

namespace ToDoList.Models.Helpers
{
    public static class JsonResponse
    {
        public static string ToStr(this Json separator) => SeparateWord(separator);

        public enum Json
        {
            NotFound,
            OperationSucces,
            YouCannotSendReportNow,
            KenulYouWasHucked,
            WasDeleted,
            IsalreadyInUse,
            Ok,
            PleaseEnterValidName
        }

        public static string SeparateWord(Json str)
        {

            var result = "";
            var res = str.ToString();

            for (int i = 0; i < res.Length; i++)
            {
                if (Char.IsUpper(res, i))
                {
                    if (i == 0)
                    {
                        result += res[i];
                        continue;
                    }

                    result += " " + res[i];
                }
                else
                    result += res[i];
            }


            return result;

        }

    }
}
