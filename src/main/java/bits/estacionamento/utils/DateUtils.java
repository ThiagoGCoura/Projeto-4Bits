package bits.estacionamento.utils;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class DateUtils {
  /**
   * Obtem a data e hora atual no horario de sao paulos
   * @return
   */
  public static LocalDateTime now() {
    return ZonedDateTime.now(ZoneId.of(ZoneId.SHORT_IDS.get("BET"))).toLocalDateTime();
  }
}
