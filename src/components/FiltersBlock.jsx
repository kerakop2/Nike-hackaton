import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FiltersBlock = ({ getProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [sizeValue, setSizeValue] = useState(filter.get("size") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setSizeValue(filter.get("size") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setSizeValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="filters-block">
      <FormControl variant="standard">
        <InputLabel id="color-label">Выберите цвет</InputLabel>
        <Select
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Выберите цвет"
          labelId="color-label"
        >
          <MenuItem value="black">Чёрный</MenuItem>
          <MenuItem value="white">Белый</MenuItem>
          <MenuItem value="blue">Синий</MenuItem>
          <MenuItem value="pink">Розовый</MenuItem>
          <MenuItem value="yellow">Жёлтый</MenuItem>
          <MenuItem value="red">Красный</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="siza-label">Выберите размер</InputLabel>
        <Select
          value={sizeValue}
          onChange={(e) => handleFilters("size", e.target.value)}
          label="Выберите размер"
          labelId="size-label"
        >
          <MenuItem value="36">36</MenuItem>
          <MenuItem value="37">37</MenuItem>
          <MenuItem value="38">38</MenuItem>
          <MenuItem value="39">39</MenuItem>
          <MenuItem value="40">40</MenuItem>
          <MenuItem value="41">41</MenuItem>
          <MenuItem value="42">42</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="standard"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        color="info"
        type="search"
        label="Живой поиск..."
      />
      <Button variant="text" color="inherit" onClick={resetFilter}>
        Сбросить
      </Button>
    </div>
  );
};

export default FiltersBlock;
