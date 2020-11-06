export const createDojoClass =
`mutation createDojoClass($input: CreateDojoClassInput!) {
    createDojoClass(input: $input) {
      class
      created_by
      created_date
      google_slide
      id
      meeting_url
      scheduled_date
    }
}`;

export const updateDojoClass =
`mutation updateDojoClass($input: UpdateDojoClassInput!) {
    updateDojoClass(input: $input) {
      class
      created_by
      created_date
      google_slide
      id
      meeting_url
      scheduled_date
    }
}`;

export const deleteDojoClass =
`mutation deleteDojoClass($input: DeleteDojoClassInput!) {
    deleteDojoClass(input: $input) {
        id
    }
}
`;
