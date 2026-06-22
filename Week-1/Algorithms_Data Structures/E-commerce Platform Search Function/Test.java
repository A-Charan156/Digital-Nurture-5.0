import model.Product;
import search.LinearSearch;
import search.BinarySearch;

public class Test {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Trouser", "Apparel"),
            new Product(103, "Book", "Education"),
            new Product(104, "Mobile", "Electronics")
        };
        String searchItem = "Trouser";
        System.out.println("Linear Search");
        Product linearresult = LinearSearch.search(products, searchItem);
        System.out.println(linearresult!=null ? "Found: "+linearresult : "Product not found");

        System.out.println("Binary Search");
        Product binaryresult = BinarySearch.search(products, searchItem);
        System.out.println(binaryresult!=null ? "Found: "+binaryresult : "Product not found");
    }
}