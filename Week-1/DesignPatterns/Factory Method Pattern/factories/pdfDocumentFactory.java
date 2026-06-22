package factories;
import documents.Document;
import documents.pdfDocument;

public class pdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new pdfDocument();
    }
}