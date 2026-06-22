package documents;

public class pdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening a PDF document");
    }
}