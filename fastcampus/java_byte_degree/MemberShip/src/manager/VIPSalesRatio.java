package manager;

public class VIPSalesRatio implements SalesRatio {

    public double getSalesRatio(double price) {
        if (price <= 50000) {
            return 0.0;
        }
        else if (price <= 100000) {
            return 0.1;
        }
        else if (price <= 200000) {
            return 0.2;
        }
        else {
            return 0.3;
        }
    }

    @Override
    public void printSalesReport(double price) {
        double ratio = getSalesRatio(price);
        double salePrice = (1 - ratio) * price;

        System.out.println("��ް� ���ݿ� ���� ���� ������ " + ratio + "�̸�, ������ " + salePrice + "�Դϴ�.");
    }
}


