import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types";
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import TextArea from "@data-driven-forms/mui-component-mapper/textarea";
import SubForm from "@data-driven-forms/mui-component-mapper/sub-form";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import Radio from "@data-driven-forms/mui-component-mapper/radio";
import baseApi, { Set_order } from "../utils/common";
import CurrOrderContext from "../utils/order_context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA]: TextArea,
  [componentTypes.SUB_FORM]: SubForm,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.RADIO]: Radio,
};
// const schema = {
//   fields: [
//     {
//       "component": "textarea",
//       "name": "q_b4",
//       "description": "Do you have any health problem that your doctor has not attributed to a diagnosed condition? If so fill above",
//       "label": null
//     },
//     {
//       "component": "sub-form",
//       "name": "sub-form-1687241399941",
//       "title": "Please list if any blood relatives are affected by Alcoholism/Addictions",
//       "fields": [
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241413070",
//           "label": "Mother"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241421616",
//           "label": "Father"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241419365",
//           "label": "Sibilings"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241416182",
//           "label": "Cousins"
//         }
//       ]
//     },
//     {
//       "component": "sub-form",
//       "name": "sub-form-1687241483170",
//       "title": "Please list if any blood relatives are affected by Allergies /Asthma /Eczema",
//       "fields": [
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241521573",
//           "label": "Mother"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241528894",
//           "label": "Father"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241523863",
//           "label": "Brother"
//         },
//         {
//           "component": "checkbox",
//           "name": "checkbox-1687241526619",
//           "label": "Sister"
//         }
//       ]
//     },
//     {
//       "component": "radio",
//       "name": "radio-1687241569005",
//       "title": "Do you work night shifts?",
//       "label": "Do you work night shifts?",
//       "options": [
//         {
//           "value": "yes",
//           "label": "Yes"
//         },
//         {
//           "value": "no",
//           "label": "No"
//         }
//       ]
//     }
//   ]
// };

const FormTemplateCanReset = (props) => <FormTemplate {...props} canReset />;

const DynamicForm = () => {
  const navigate = useNavigate();
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [FormSchema, setFormSchema] = useState({ fields: [] });
  let formdata = {
    fields: [],
  };
  const o_id = localStorage.getItem("currOrder");
  const handlesubmit = (data) => {

    console.log("form data", data);
    baseApi
      .post(`/dashboard/${o_id}/complete-questionnaire`, data)
      .then((response) => {
        console.log("after questionare task", response.data);


        Swal.fire({
          position: "center",
          icon: "success",
          title: "Questionare Done",
          showConfirmButton: false,
          timer: 1500,
        });
        Set_order(o_id, setCurrOrder, navigate);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    baseApi.get(`/questionnaires`).then((response) => {

      var arr = response.data.questionJson.fields;


      FormSchema.fields = arr;
      setFormSchema({ ...FormSchema });
      // console.log("form schems", FormSchema);
    }).catch((error) => {
      console.log("questionare error:", error)
    })
  }, []);

  return (
    <Grid spacing={4} container>
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplateCanReset}
        schema={FormSchema}
        onSubmit={handlesubmit}
      />
    </Grid>
  );
};

DynamicForm.displayName = "Get started form";

export default DynamicForm;
