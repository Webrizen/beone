import React from "react";
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

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA]: TextArea,
  [componentTypes.SUB_FORM]: SubForm,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.RADIO]: Radio,
};

const schema = {
  fields: [
    {
      component: "textarea",
      name: "q_b4",
      description:
        "Do you have any health problem that your doctor has not attributed to a diagnosed condition? If so fill above",
      label: null,
    },
    {
      component: "sub-form",
      name: "sub-form-1687241399941",
      title:
        "Please list if any blood relatives are affected by Alcoholism/Addictions",
      fields: [
        {
          component: "checkbox",
          name: "checkbox-1687241413070",
          label: "Mother",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241421616",
          label: "Father",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241419365",
          label: "Sibilings",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241416182",
          label: "Cousins",
        },
      ],
    },
    {
      component: "sub-form",
      name: "sub-form-1687241483170",
      title:
        "Please list if any blood relatives are affected by Allergies /Asthma /Eczema",
      fields: [
        {
          component: "checkbox",
          name: "checkbox-1687241521573",
          label: "Mother",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241528894",
          label: "Father",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241523863",
          label: "Brother",
        },
        {
          component: "checkbox",
          name: "checkbox-1687241526619",
          label: "Sister",
        },
      ],
    },
    {
      component: "radio",
      name: "radio-1687241569005",
      title: "Do you work night shifts?",
      label: "Do you work night shifts?",
      options: [
        {
          value: "yes",
          label: "Yes",
        },
        {
          value: "no",
          label: "No",
        },
      ],
    },
  ],
};

const FormTemplateCanReset = (props) => <FormTemplate {...props} canReset />;

const DynamicForm = () => {
  return (
    <Grid spacing={4} container>
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplateCanReset}
        schema={schema}
        onSubmit={console.log}
        onCancel={() => console.log("Cancel action")}
      />
    </Grid>
  );
};

DynamicForm.displayName = "Get started form";

export default DynamicForm;
