import { DatePicker } from "@mantine/dates";
import {IconCalendarMonth} from '@tabler/icons-react';
import {
  Group,
  Grid,
  Text,
  Modal,
  ActionIcon,
  Button,
  Flex,
  Container,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

interface Props{
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

function DateSchedule({date, setDate}:Props) {

  const [opened, { close, open }] = useDisclosure(false);

  return (
      <>
        <Grid gutter="xl">
          <Grid.Col pl="8%" pt="5%" span={3}>
            <Text size="xl" color="white">
              {date?.getDate() === new Date().getDate() ? "Today" :date?.toLocaleDateString("en-US", { weekday: "long" })}{" "}
              {date ? date.getDate().toString().padStart(2, "0") : ""}.
              {date ? (date.getMonth() + 1).toString().padStart(2, '0') : ""}

            </Text>
          </Grid.Col>
          <Grid.Col pl="10%" pt="8%" span={3} offset={6}>
            <Modal
                opened={opened}
                onClose={close}
                size="auto"
                title="Calendar"
                overlayProps={{
                  blur: 2,
                }}
            >
              <DatePicker
                  size="md"
                  value={date}
                  highlightToday={true}
                  onChange={(value) => {
                    setDate(value);
                    close();
                  }}
              />
            </Modal>
            <ActionIcon variant="outline" aria-label="Calendar">
              <IconCalendarMonth
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                  onClick={open}
              />
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </>
  );
}

export default DateSchedule;