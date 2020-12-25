import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { resetServerContext } from "react-beautiful-dnd";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { isEmpty } from "lodash";
import { useSnackbar } from "notistack";
import { Container } from "@material-ui/core";
import { useDocument } from "@nandorojo/swr-firestore";
import Skeleton from "@material-ui/lab/Skeleton";

const CommissionTable = () => {
  const { useState } = React;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const alertPop = (message, type) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: type,
    });
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const [columns, setColumns] = useState([
    {
      title: "Airline",
      field: "iataCode",
    },
    {
      title: "Markup",
      field: "markup",
      initialEditValue: "0",
      type: "numeric",
    },
    {
      title: "SotoMarkup",
      field: "sotoMarkup",
      initialEditValue: "0",
      type: "numeric",
    },
    {
      title: "FixMarkup",
      field: "fixMarkup",
      initialEditValue: "0",
      type: "numeric",
    },
    {
      title: "Class1",
      field: "promoClass1",
      initialEditValue: "",
      lookup: { 0: "", 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F" },
    },
    {
      title: "Price1",
      field: "priceOfClass1",
      initialEditValue: "0",
      type: "numeric",
    },
    {
      title: "Class2",
      field: "promoClass2",
      initialEditValue: "",
      lookup: { 0: "", 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F" },
    },
    {
      title: "Price2",
      field: "priceOfClass2",
      initialEditValue: "0",
      type: "numeric",
    },
  ]);

  // const [data, setData] = useState([]);

  const { data, update, error, loading } = useDocument(
    "adminSettings/commissionSettings"
  );
  if (!data)
    return (
      <>
        <Skeleton variant="rect" width="100%" height={500} />
      </>
    );
  console.log("data", data);
  const { tableData } = data;
  return (
    <Container disableGutters>
      <MaterialTable
        options={{ draggable: true }}
        icons={tableIcons}
        title="Commission Settings"
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                update({ tableData: [...tableData, newData] })
                  .then((res) => {
                    alertPop("updated succesfully", "success");
                    resolve();
                  })
                  .catch((err) => console.log(err));
                //    console.log("renderdata", [...data, newData]);
              }, 100);
            }),
          onBulkUpdate: (changes) =>
            new Promise((resolve, reject) => {
              //  console.log(changes);

              setTimeout(() => {
                if (!isEmpty(changes)) {
                  let previousData = [...tableData];
                  for (let item in changes) {
                    previousData[item] = changes[item].newData;
                  }
                  update({ tableData: [...previousData] })
                    .then((res) => {
                      alertPop("updated succesfully", "success");
                      console.log("res", res);
                      resolve();
                    })
                    .catch((err) => console.log(err));
                  //       console.log("data", previousData);
                }
              }, 100);
            }),
          onRowDelete: (deletedRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(deletedRow);
                let previousData = [...tableData];
                previousData.splice(deletedRow.tableData.id, 1);
                update({ tableData: [...previousData] })
                  .then((res) => {
                    alertPop("updated succesfully", "success");
                    resolve();
                  })
                  .catch((err) => console.log(err));
                resolve();
              }, 100);
            }),
        }}
      />
    </Container>
  );
};

export default CommissionTable;

export const getServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
