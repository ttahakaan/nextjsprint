import React from "react";

export default function Home() {
  const printDocument = () => {
    const printWindow = window.open("_blank");
    if (printWindow != null) {
      printWindow.document.open();
      printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sipariş Fisi</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: black;
        }
        .container {
          width: 300px;
          margin: 0 auto;
          border: 1px solid black;
          padding: 10px;
        }
        .logo {
          text-align: center;
        }
        .table-number {
          text-align: center;
        }
        .invoice-info {
          display: flex;
          justify-content: space-between;
        }
        .line {
          border-top: 1px solid black;
          margin: 10px 0;
        }
        .item {
          display: flex;
          justify-content: space-between;
        }
        .total {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
        }
      </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
          <h1>Test Shop</h1>
          </div>
          <div class="table-number">
            Masa Numarası: 10
          </div>
          <div class="line"></div>
          <div class="invoice-info">
            <div class="invoice-number">Fatura Numarası: 123456</div>
            <div class="date">Tarih: 14.03.2024</div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>Omlet</div>
            <div>₺ 19,90</div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>Patates Kızartması</div>
            <div>₺ 22,90</div>
          </div>
          <div class="line"></div>
          <div class="total">
            <div>Toplam:</div>
            <div>₺ 42,80</div>
          </div>
          <div class="line"></div>
          <div class="total">
            <div>KDV (%18):</div>
            <div>₺ 7,70</div>
          </div>
          <div class="line"></div>
          <div class="total">
            <div>Genel Toplam:</div>
            <div>₺ 50,50</div>
          </div>
          
        </div>
        <div class="footer">
            Fast Pos - 2024
          </div>
      </body>
      </html>
      

      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div>
      <button onClick={printDocument}>Print</button>
    </div>
  );
}
