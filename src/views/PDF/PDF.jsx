import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import domToPdf from "dom-to-pdf";
import { useRef } from "react";
import GaugeChart from "react-gauge-chart";
import "./PDF.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import randomString from "random-string";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const chartStyle = {
  height: 250,
};

const PDF = () => {
  const navigate = useNavigate();

  const { defaulter } = useSelector((state) => state.defaulter);
  const printRef = useRef(null);
  var uuid = randomString({
    length: 20,
    numeric: true,
    letters: true,
    special: false,
  });
  const pdfDownload = async (e) => {
    const domElement = document.getElementById("mainDivToPDF");
    // html2canvas(domElement).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPdf("p", "mm", "a4");
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = pdf.internal.pageSize.getHeight();
    //   pdf.addImage(imgData, "JPEG", 0, 0, width, height);
    //   pdf.save(`${new Date().toISOString()}.pdf`);
    // });

    const options = {
      filename: `${new Date().toISOString()}.pdf`,
      overrideWidth: 1100,
    };

    domToPdf(domElement, options, (res) => {
      //
    });
  };
  return (
    <>
      <MDBBtn
        className="mb-4"
        block
        onClick={(e) => {
          navigate('/search')
        }}
        id="print"
        style={{ width: "130px", float: "left" }}
      >
        Cancel
      </MDBBtn>
      <MDBBtn
        className="mb-4"
        block
        onClick={(e) => {
          pdfDownload(e);
          // handlePrint();
        }}
        id="print"
        style={{ width: "200px", float: "right" }}
      >
        Download Report
      </MDBBtn>

      <div className="mainDiv" ref={printRef} id="mainDivToPDF">
        <GaugeChart
          id="score_meter"
          animate={false}
          percent={0.56}
          arcWidth={0.2}
          cornerRadius={6}
          textColor={"#000"}
          hideText={true}
          needleBaseColor={"#008abe"}
          needleColor="#345243"
          style={chartStyle}
          arcsLength={[1, 2, 3]}
          formatTextValue={(value) => value + ""}
        />
        <div className="header">
          <p>CREDIT BUREAU INFORMATION CBI</p>
          <hr />
        </div>
        <div className="inquiryContainer">
          <div className="title">
            <p>Inquiry By</p>
          </div>
          <div className="information">
            <div className="item">
              <div className="text">Name</div>
              <div className="value">Amigoestech Finance</div>
            </div>
            <div className="item">
              <div className="text">Email</div>
              <div className="value">prajwalgadge9899@gmail.com</div>
            </div>
            <div className="item">
              <div className="text">Mobile</div>
              <div className="value">
                {"7066057117".substring(0, 5) + "*".repeat(5)}
              </div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
        <div className="reportContainer">
          <div className="title">
            <p>Report Details</p>
          </div>
          <div className="information">
            <div className="item">
              <div className="text">Report Date</div>
              <div className="value">
                {moment().format("DD-MM-YYYY hh:mm:ss")}
              </div>
            </div>
            <div className="item">
              <div className="text">Report Number</div>
              <div className="value">{uuid}</div>
            </div>
            <div className="item">
              <div className="text">Member Name</div>
              <div className="value">{defaulter?.Customer_Name}</div>
            </div>
            <div className="item">
              <div className="text">UserName/ ID</div>
              <div className="value"></div>
            </div>
          </div>
        </div>
        <div className="accountContainer">
          <div className="title">
            <p>Account Holder Details</p>
          </div>
          <div className="information">
            <div className="item">
              <div className="text">Name</div>
              <div className="value">{defaulter?.Customer_Name}</div>
            </div>
            <div className="item">
              <div className="text">Gender</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Contact No</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">DOB</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Email Id</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
        <div className="addressContainer">
          <div className="title">
            <p>Customer Address</p>
          </div>
          <div className="address">
            <p>{defaulter?.Address}</p>
          </div>
        </div>
        <div className="documentContainer">
          <div className="title">
            <p>Customer Document/s Details</p>
          </div>
          <div className="information">
            <div className="item">
              <div className="text">PAN</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Aadhar Card No</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Voting Card No</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
        <div className="loanContainer">
          <div className="title">
            <p>Loan Summary</p>
          </div>
          <div className="information">
            <div className="item">
              <div className="text">Name</div>
              <div className="value">{defaulter?.Customer_Name}</div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="value"></div>
            </div>
            <div className="item">
              <div className="text">Conatct No</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Email Id</div>
              <div className="value">{"--No Data--"}</div>
            </div>
            <div className="item">
              <div className="text">Total Accounts</div>
              <div className="value">1</div>
            </div>
            <div className="item">
              <div className="text"></div>
              <div className="value"></div>
            </div>
          </div>
        </div>
        <div className="accountSummaryContainer">
          <div className="header">
            <h2>Accountwise Summary</h2>
          </div>
          <div className="subHeader">
            <p>
              ( Credit History as per the Data Submitted by Respective Credit
              Institutions )
            </p>
          </div>
          <div className="accountContainer">
            <div className="title">
              <p>Account Details</p>
            </div>
            <div className="information">
              <div className="item">
                <div className="text">Consumer Name</div>
                <div className="value">{defaulter?.Customer_Name}</div>
              </div>
              <div className="item">
                <div className="text"></div>
                <div className="value"></div>
              </div>
              <div className="item">
                <div className="text">Gender</div>
                <div className="value"></div>
              </div>
              <div className="item">
                <div className="text">DOB</div>
                <div className="value"></div>
              </div>
              <div className="item">
                <div className="text">Address</div>
                <div className="value">1</div>
              </div>
              <div className="item">
                <div className="text"></div>
                <div className="value"></div>
              </div>
              <div className="item">
                <div className="text">Mobile No</div>
                <div className="value">1</div>
              </div>
              <div className="item">
                <div className="text">Email</div>
                <div className="value"></div>
              </div>
              <div className="item">
                <div className="text">Secured Loan</div>
                <div className="value">1</div>
              </div>
              <div className="item">
                <div className="text"></div>
                <div className="value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDF;

// AccountNumber: "232/67";
// AccountOpenDate: "37771";
// Address: "479, neharu nagar nagpur";
// Bank_Address: "ganesh nagar, nagpur";
// Bank_Name: "shri arihant society ";
// City: "NAGPUR";
// Country: "INDIA";
// CreditScore: 580;
// Customer_Name: " VINAYAK VASANTRo GILLURKAR";
// DisbursementAmount: "10701";
// DisbursementDate: "38210";
// InstallmentAmount: "750";
// LastInstallmentPaidDate: "43426.304683912036";
// LoanAmount: "15000";
// LoanExpiryDate: "40328";
// LoanOutstandingBalance: "10701";
// LoanPeriod: "84";
// LoanType: "pigmy  loan ";
// OfficeNo: "7447571201";
// OverdueNoofInstallment: "12";
// PinCode: "440024";
// Registration_No: "123456";
// State: "MH";
// isDefaulter: "YES";
// isNPA: "Loss Asset";
