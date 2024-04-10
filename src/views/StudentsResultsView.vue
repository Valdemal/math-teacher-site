<template>
  <TheBanner id="start">Результаты учеников</TheBanner>
  <ContentSection>
    <h3>
      Результаты государственной итоговой аттестации по программам среднего общего образования (ЕГЭ) за 3 года
      (по математике профильной):
    </h3>
    <TableCompoment>
      <tbody>
      <tr>
        <td rowspan="3">Учебный год</td>
        <td rowspan="3">Кол-во обучающихся в классах, изучающих данный предмет (всего)</td>
        <td colspan="2" rowspan="2">Кол-во участников ЕГЭ по предмету</td>
        <td colspan="6">Результаты</td>
      </tr>
      <tr>
        <td colspan="2">Количество обучающихся, преодолевших порог</td>
        <td colspan="2">Количество обучающихся с результатами от 81 до 99 б.</td>
        <td colspan="2">Количество обучающихся, получивших 100 б.</td>
      </tr>
      <tr>
        <td>чел.</td><td>%</td><td>чел.</td><td>%</td><td>чел.</td><td>%</td><td>чел.</td><td>%</td>
      </tr>
      <tr>
        <td>2020-2021</td>
        <td colspan="9">Учитель не имел учебной нагрузки в 11 классах</td>
      </tr>
      <tr>
        <td>2021-2022</td><td>12</td><td>8</td><td>66,7</td><td>8</td><td>100</td><td>0</td><td>0</td><td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>2022-2023</td><td>21</td><td>15</td><td>71,4</td><td>15</td><td>100</td><td>2</td><td>13</td><td>0</td>
        <td>0</td>
      </tr>
      </tbody>
    </TableCompoment>
    <br/>
    <TableCompoment>
      <tbody>
      <tr>
        <td rowspan="3">Учебный год</td>
        <td rowspan="3">Кол-во учащихся (всего)</td>
        <td rowspan="3">Кол-во учащихся, сдававших ЕГЭ по математике на профильном уровне</td>
        <td colspan="5">Успеваемость
          Результаты</td>
      </tr>
      <tr>
        <td rowspan="2">Успеваемость</td>
        <td colspan="3">Средний балл</td>
        <td rowspan="2">Кол-во и % учащихся, показавших результат выше среднеобластных</td>
      </tr>
      <tr>
        <td>по области</td><td>по району </td><td>в классе учителя</td>
      </tr>
      <tr>
        <td>2020-2021</td><td colspan="7">Учитель не имел учебной нагрузки в 11 классах</td>
      </tr>
      <tr>
        <td>2021-2022</td><td>12</td><td>8</td><td>100%</td><td>60,88</td><td>54</td><td>65</td><td>6 / 75%</td>
      </tr>
      <tr>
        <td>2022-2023</td><td>21</td><td>15</td><td>100%</td><td>58,05</td><td>59</td><td>64</td><td>9 / 60%</td>
      </tr>
      </tbody>
    </TableCompoment><br/>
    <h3>Позитивная динамика качества знаний (%) обучающихся по учебному предмету за последние три года</h3>
    <TableCompoment>
      <tbody>
      <tr>
        <td>Учебный год</td>
        <td>Класс</td>
        <td>Кол-во обучающихся, изучающих данный предмет (всего)</td>
        <td>Успеваемость, %</td>
        <td>Качество знаний, %</td>
      </tr>
      <tr><td>2020-2021</td><td>9Б</td><td>30</td><td>100</td><td>80</td></tr>
      <tr><td>2021-2022</td><td>10А</td><td>22</td><td>100</td><td>86,4</td></tr>
      <tr><td>2022-2023</td><td>11А</td><td>21</td><td>100</td><td>90,5</td>
      </tr>
      </tbody>
    </TableCompoment><br/>
    <TableCompoment>
      <tbody>
      <tr>
        <td>Учебный год</td>
        <td>Класс</td>
        <td>Кол-во обучающихся, изучающих данный предмет (всего)</td>
        <td>Успеваемость, %</td>
        <td>Качество знаний, %</td>
      </tr>
      <tr><td>2020-2021</td><td>5В</td><td>27</td><td>100</td><td>93</td></tr>
      <tr><td>2021-2022</td><td>6В</td><td>27</td><td>100</td><td>89</td></tr>
      <tr><td>2022-2023</td><td>7В</td><td>24</td><td>100</td><td>94</td></tr>
      </tbody>
    </TableCompoment><br/>
    <TableCompoment>
      <tbody>
      <tr>
        <td>Учебный год</td>
        <td>Класс</td>
        <td>Кол-во обучающихся, изучающих данный предмет (всего)</td>
        <td>Успеваемость, %</td>
        <td>Качество знаний, %</td>
      </tr>
      <tr><td>2020-2021</td><td>6В</td><td>27</td><td>100</td><td>63</td></tr>
      <tr><td>2021-2022</td><td>7В </td><td>25</td><td>100</td><td>64</td></tr>
      <tr><td>2022-2023</td><td>8В </td><td>24</td><td>100</td><td>74</td></tr>
      </tbody>
    </TableCompoment>
  </ContentSection>
</template>
<script setup>
import TheBanner from "@/components/TheBanner.vue";
import ContentSection from "@/components/ContentSection.vue";
import TableCompoment from "@/components/TableCompoment.vue";
</script>
