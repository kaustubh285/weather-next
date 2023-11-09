import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

type Props = {
  title: string;
  metric: string;
  color?: string;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Stat
      className={` border-2 border-black rounded-lg p-2 mt-2 shadow-md ${color}`}>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{metric}</StatNumber>

      {title == "UV Index" && Number(metric) > 5 && (
        <StatHelpText>
          {/* <StatArrow type='increase' /> */}
          (UV Index is high, be sure to wear SPF)
        </StatHelpText>
      )}
    </Stat>
  );
}

export default StatCard;
