import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import {
  Skeleton,
} from '@mui/material';
import { addSelectedMetrics } from '../../redux/slice/metrics.slice';
import MultiSelectViewModel from './MultiSelectViewModel';
import { useStyles } from './multiselect.style';
import AlertMessage from '../AlertMessage/AlertMessage';
import { TypeError } from '../AlertMessage/Types';

const MultipleSelect: FC<MultiSelectViewModel> = ({ listOfMetrics, isLoading, hasError }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectItem, setSelectItem] = React.useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    dispatch(addSelectedMetrics(value));
    setSelectItem(typeof value === 'string' ? value.split(',') : value);
  };

  if (isLoading) return <Skeleton animation="wave" variant="rectangular" width={400} height={80} />;
  if (hasError) return <AlertMessage message={hasError} type={TypeError.error} />;

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.placeholder}>Select...</InputLabel>
      <Select
        multiple
        value={selectItem}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected: any) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {listOfMetrics ? listOfMetrics.map((item: any) => (
          <MenuItem
            key={item}
            value={item}
          >
            {item}
          </MenuItem>
        )) : null}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
