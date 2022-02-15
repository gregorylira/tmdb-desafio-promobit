import React from "react";
import { Li, Ul } from "./styles";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
}

export function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  const current = Math.floor(offset ? offset / limit + 1 : 1);
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  async function OnPageChange(page: number) {
    setOffset(limit * (page - 1));
  }

  return (
    <Ul>
      {current < 2 ? (
        <></>
      ) : (
        <li>
          <button onClick={() => OnPageChange(current - 1)}>Anterior</button>
        </li>
      )}
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <Li isActive={current === page}>
            <button onClick={() => OnPageChange(page)}>{page}</button>
          </Li>
        ))}
      {current > pages - 1 ? (
        <></>
      ) : (
        <li>
          <button onClick={() => OnPageChange(current + 1)}>Próxima</button>
        </li>
      )}
    </Ul>
  );
}
