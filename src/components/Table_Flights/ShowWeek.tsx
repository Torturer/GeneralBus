import { FC } from "react";
import { IRegular } from "./data/data";
import styles from "../../styles/FligtTable/ShowWeek.module.css";

type IProps = {
  week: IRegular;
};

const ShowWeek: FC<IProps> = ({ week }) => {
  const weekdays = [
    { label: "Пн", active: week.mon },
    { label: "Вт", active: week.tues },
    { label: "Ср", active: week.wed },
    { label: "Чт", active: week.thurs },
    { label: "Пт", active: week.fri },
    { label: "Сб", active: week.sat },
    { label: "Вс", active: week.sun }
  ];

  const allDaysActive = weekdays.every(day => day.active);

  return (
    <div>
      {allDaysActive ? (
        <div className={`${styles.box} ${styles.active}`}>Щодня</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "302px",
            padding: "6px"
          }}
        >
          {weekdays.map((day, index) => (
            <div
              key={index}
              className={`${styles.square} ${day.active ? styles.active : ""}`}
            >
              {day.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowWeek;