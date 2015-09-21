public class PingPong {
	public static void main(String[] args) {
			for (int ii = 1; ii < 101; ii++) {
				if (ii % 15 == 0) {
					System.out.println("PingPong");
				}
				else if (ii % 3 == 0) {
					System.out.println("Ping");
				}
				else if (ii % 5 == 0) {
					System.out.println("Pong");
				}
				else {
					System.out.println(ii);
				}
			}
	}
}