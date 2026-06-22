import documents.Document;
import factories.*;

public class Test {
    public static void main(String[] args) {
        DocumentFactory factory;
        
        factory = new WordDocumentFactory();
        Document worddoc = factory.createDocument();
        worddoc.open();

        factory = new pdfDocumentFactory();
        Document pdfdoc = factory.createDocument();
        pdfdoc.open();

        factory = new ExcelDocumentFactory();
        Document exceldoc = factory.createDocument();
        exceldoc.open();
    }
}