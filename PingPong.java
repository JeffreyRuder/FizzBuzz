public class PingPong {
	public static void main(String[] args) {

		int firstArg;

		if (args.length == 0) {
			System.out.println("Please enter a number to PingPong to.");
			System.exit(0);
		}

		if (args.length > 0) {
			try {
				firstArg = Integer.parseInt(args[0]);
			} catch (NumberFormatException e) {
				System.err.println("Number to PingPong to must be an integer, but you entered " + args[0]);
				System.exit(1);
			}
		}

		for (int ii = 1; ii < Integer.parseInt(args[0]); ii++) {
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
