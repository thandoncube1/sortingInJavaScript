// C# Program to implement Linear
// Search  in unsorted arrays
using System;

class main {
    // Function to implement
    // search operations
    static int  findElement(int[] arr, int n, int key) {
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                return i;
            }

            // If the key is not found
            return -1;
        }
    }

    // Driver code
    public static void Main() {
        int[] arr = { 12, 34, 10, 6, 40 };
        int n = arr.Length;
 
        // Using a last element as
        // search element
        int key = 40;
        int position = findElement(arr, n, key);
 
        if (position == -1)
            Console.WriteLine("Element not found");
        else
            Console.WriteLine("Element Found at Position: "
                              + (position + 1));
    }
}