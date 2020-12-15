package manager;

public class BasicSalesRatio implements SalesRatio {

    public double getSalesRatio(double price) {
        if (price <= 50000) {
            return 0.0;
        }
        else if (price <= 100000) {
            return 0.05;
        }
        else if (price <= 200000) {
            return 0.1;
        }
        else {
            return 0.2;
        }
    }

    @Override
    public void printSalesReport(double price) {
        double ratio = getSalesRatio(price);
        double salePrice = (1 - ratio) * price;

        System.out.println("등급과 가격에 따른 세일 비율은 " + ratio + "이며, 가격은 " + salePrice + "입니다.");
    }
}
