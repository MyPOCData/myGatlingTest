package signature;

public class generateUid {

  public static String getUuidMaison(String phoneNumber) {
    final String uuid;
    try {
      uuid = phoneNumber + "-Test";
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
    return uuid;
  }
}


