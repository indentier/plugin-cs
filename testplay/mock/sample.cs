using System;
using System.Collections.Generic;

class Sample {
    static void SayHello(string content) {
        if (content == null) {
            Console.WriteLine("...");
        } else if (content.GetType() != typeof(string)) {
            Console.WriteLine(":rage:");
        } else {
            Console.WriteLine(content);
        }
    }

    static void Main() {
        SayHello(null);
        SayHello("Hi");

        var obj = new Dictionary<string, string> {
            { "foo", "bar" },
            { "hoge", "fuga" },
        };

        var nums = new List<int> { 1, 2, 3 };
        nums.ForEach(n => {
            Console.WriteLine(n);
        });
    }
}
