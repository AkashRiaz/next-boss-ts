interface Developer<T, Z=null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smartWatch: T;
  bike?: Z;
}

interface WithoutBrand {
  heartRate: string;
  stopWatch: boolean;
}

interface WithoutBrandBike {
  Engine: boolean;
  light: boolean;
}

interface WithBrandWatch {
  heatRate: string;
  stopWatch: boolean;
  alarm: boolean;
  other: string;
}

interface WithBrandBike {
  model: string;
  engine: boolean;
  light: boolean;
}

const poorDeveloper: Developer<WithoutBrand, WithoutBrandBike> = {
  name: "Md akash",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A2025",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "120",
    stopWatch: true,
  },
  bike: {
    Engine: true,
    light: true,
  },
};

const richDeveloper: Developer<WithBrandWatch> = {
  name: "Md Riaz",
  salary: 200,
  device: {
    brand: "Apple",
    model: "16pro-max",
    releasedYear: "2026",
  },
  smartWatch: {
    heatRate: "200",
    stopWatch: true,
    alarm: true,
    other: "Other is present",
  },
};
