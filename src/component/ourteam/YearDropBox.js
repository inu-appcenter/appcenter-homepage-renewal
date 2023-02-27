import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const yearList = new Array(dayjs().get('year')-2022 + 1).fill(0).map((_,i) =>2022+i);
export default function YearDropBox({year,handleYearChange}){

    const handleChange = (event) => {
        handleYearChange(event.target.value);
    };

    return(
        <>
            <FormControl sx={{ width: 150}}>
                <DropBox
                    value={year}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {
                        yearList.map((year, i) => (
                            <MenuItem key={i} value={year}>{year}</MenuItem>
                        ))
                    }
                </DropBox>
            </FormControl>
        </>
    )
}

const DropBox = styled(Select)`
  border-radius: 15px;
  &>*:first-child{
    font-weight: 600;
    padding: 10px 16px;
  }
`
