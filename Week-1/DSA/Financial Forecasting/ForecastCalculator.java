public class ForecastCalculator {
    public static double calculateFutureValue(double initialvalue,double growthrate,int years) {
        if(years==0)
        return initialvalue;
        return (1+growthrate)*calculateFutureValue(initialvalue, growthrate, years-1);
    }

    // Memoization to improve time complexity
    public static double calculateWithMemo(double initialvalue,double growthrate,int years, double[] memo) {
        if(years==0)
        return initialvalue;
        if(memo[years]!=0)
        return memo[years];
        memo[years] = (1+growthrate)*calculateWithMemo(initialvalue,growthrate,years-1,memo);
        return memo[years];
    }

    public static void main(String[] args) {
        double initialvalue = 10000;
        double growthrate = 0.08;
        int years = 5;
        double futurevalue = ForecastCalculator.calculateFutureValue(initialvalue,growthrate,years);
        System.out.printf("Predicted value after %d years (Recursive): Rs.%.2f%n", years, futurevalue);

        double[] memo = new double[years+1];
        double value = ForecastCalculator.calculateWithMemo(initialvalue,growthrate,years,memo);
        System.out.printf("Predicted value after %d years (Memoization): Rs.%.2f%n", years, value);
    }
}