import React from 'react';
import '../css/Fare.css'
// cssFare.css
// Define fare data
export const fareData = {
  nonAC: [
    { srNo: 1, seat: 13, perKmRate: 7200, extraKm: 22, puneLocal: 5500, extraHour: 400, mumbaiUpto350Km: 9000, mahabaleshwarUpto300Km: 9000,  },
    { srNo: 2, seat: 17, perKmRate: 7500, extraKm: 22, puneLocal: 5500, extraHour: 400, mumbaiUpto350Km: 10000, mahabaleshwarUpto300Km: 10000,  },
    { srNo: 3, seat: 20, perKmRate: 8100, extraKm: 25, puneLocal: 5500, extraHour: 400, mumbaiUpto350Km: 11000, mahabaleshwarUpto300Km: 12000,  },
    { srNo: 4, seat: 30, perKmRate: 9600, extraKm: 32, puneLocal: 7500, extraHour: 400, mumbaiUpto350Km: 14000, mahabaleshwarUpto300Km: 13000,  },
    { srNo: 5, seat: 32, perKmRate: 11100, extraKm: 37, puneLocal: 7500, extraHour: 400, mumbaiUpto350Km: 18000, mahabaleshwarUpto300Km: 14000,  },
    { srNo: 6, seat: 35, perKmRate: 12000, extraKm: 40, puneLocal: 8000, extraHour: 400, mumbaiUpto350Km: 18000, mahabaleshwarUpto300Km: 14000,  },
    { srNo: 7, seat: 45, perKmRate: 14400, extraKm: 48, puneLocal: 9000, extraHour: 400, mumbaiUpto350Km: 20000, mahabaleshwarUpto300Km: 16000,  },
    { srNo: 8, seat: 49, perKmRate: 15000, extraKm: 50, puneLocal: 9500, extraHour: 400, mumbaiUpto350Km: 20000, mahabaleshwarUpto300Km: 16000,  }
  ],
  ac: [
    { srNo: 1, seat: 13, perKmRate: 8100, extraKm: 25, puneLocal: 5500, extraHour: 500, mahabaleshwarMumbai: 10000, shirdi450Km: 10000 },
    { srNo: 2, seat: 15, perKmRate: 9000, extraKm: 30, puneLocal: 5500, extraHour: 500, mahabaleshwarMumbai: 11000, shirdi450Km: 11000 },
    { srNo: 3, seat: 17, perKmRate: 9600, extraKm: 25, puneLocal: 5500, extraHour: 500, mahabaleshwarMumbai: 12000, shirdi450Km: 12000 },
    { srNo: 4, seat: 20, perKmRate: 10200, extraKm: 30, puneLocal: 6000, extraHour: 500, mahabaleshwarMumbai: 15000, shirdi450Km: 13000 },
    { srNo: 5, seat: 24, perKmRate: 11000, extraKm: 38, puneLocal: 8000, extraHour: 500, mahabaleshwarMumbai: 18000, shirdi450Km: 14000 },
    { srNo: 6, seat: 32, perKmRate: 12000, extraKm: 48, puneLocal: 9500, extraHour: 600, mahabaleshwarMumbai: 16000, shirdi450Km: 16000 },
    { srNo: 7, seat: 35, perKmRate: 14000, extraKm: 50, puneLocal: 12000, extraHour: 800, mahabaleshwarMumbai: 21000, shirdi450Km: 16000 },
    { srNo: 8, seat: 40, perKmRate: 14000, extraKm: 60, puneLocal: 12000, extraHour: 800, mahabaleshwarMumbai: 21000, shirdi450Km: 16000 },
    { srNo: 9, seat: 45, perKmRate: 16000, extraKm: 60, puneLocal: 14000, extraHour: 1000, mahabaleshwarMumbai: 25000, shirdi450Km: 19500 },
    { srNo: 10, seat: 49, perKmRate: 21000, extraKm: 90, puneLocal: 16000, extraHour: 1000, mahabaleshwarMumbai: 27000, shirdi450Km: 21000 }
  ],
  specialPremium: [
    { srNo: 10, seat: 'Scania 45', perKmRate: 24000, extraKm: 80, puneLocal: 17000, extraHour: 1000, mahabaleshwarMumbai: 24000,  },
    { srNo: 11, seat: 'Volvo 49', perKmRate: 25500, extraKm: 90, puneLocal: 17000, extraHour: 1000, mahabaleshwarMumbai: 27000,  }
  ]
};

// Component to render fare tables
const FareTable = ({ title, fareData, columns }) => {
  return (
    <div className="fare-table-container">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fareData.map((row) => (
            <tr key={row.srNo}>
              <td>{row.srNo}</td>
              <td>{row.seat}</td>
              <td>{row.perKmRate}</td>
              <td>{row.extraKm}</td>
              <td>{row.puneLocal}</td>
              <td>{row.extraHour}</td>
              <td>{row.mumbaiUpto350Km || row.mahabaleshwarMumbai}</td>
              <td>{row.mahabaleshwarUpto300Km || row.mahabaleshwarMumbai}</td>
              <td>{row.shirdi450Km}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main component
const FareDataDisplay = () => {
  return (
    <div className="fare-data-display">
      <h1>Amruta Tours & Travels Bus Fare</h1>
      <div className='table-responsive'>
      <FareTable 
        title="Non AC Bus Fare" 
        fareData={fareData.nonAC} 
        columns={["SR.NO", "Seat", "Per KM Rate (300 KM Package)", "Per KM", "8/80 Pune Local", "Extra Hour", "Mumbai Upto 350KM", "Mahabaleshwar Upto 300KM"]}
      />
      </div>
      <div className='table-responsive'>
      <FareTable 
        title="AC Bus Fare" 
        fareData={fareData.ac} 
        columns={["SR.NO", "Seat", "Per KM Rate (300 KM Package)", "Per KM", "8/80 Pune Local", "Extra Hour", "Mumbai Upto 350KM", "Mahabaleshwar Mumbai", "Shirdi (450 KM)"]}
      />
      </div>
      <div className='table-responsive'>
      <FareTable 
        title="Special Premium Bus Fare" 
        fareData={fareData.specialPremium} 
        columns={["SR.NO", "Seat", "Per KM Rate (300 KM Package)", "Per KM", "8/80 Pune Local", "Extra Hour", "Mahabaleshwar Mumbai", "Shirdi (450 KM)"]}
      />
      </div>
   
   
    </div>
  );
};

export default FareDataDisplay;
