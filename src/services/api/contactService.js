// Contact Service using ApperClient for contact_submission_c table
export const contactService = {
  async submitForm(formData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Only include Updateable fields
      const params = {
        records: [{
          Name: formData.name,
          name_c: formData.name,
          email_c: formData.email,
          company_c: formData.company,
          project_type_c: formData.projectType,
          message_c: formData.message,
          submitted_at_c: new Date().toISOString(),
          status_c: 'received'
        }]
      };

      const response = await apperClient.createRecord('contact_submission_c', params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create contact submissions ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
          
          failedRecords.forEach(record => {
            record.errors?.forEach(error => {
              throw new Error(`${error.fieldLabel}: ${error}`);
            });
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulRecords[0]?.data || null;
      }
      
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error submitting contact form:", error?.response?.data?.message);
        throw new Error(error.response.data.message);
      } else {
        console.error(error);
        throw error;
      }
    }
  },

  async getAllSubmissions() {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "name_c" } },
          { field: { Name: "email_c" } },
          { field: { Name: "company_c" } },
          { field: { Name: "project_type_c" } },
          { field: { Name: "message_c" } },
          { field: { Name: "submitted_at_c" } },
          { field: { Name: "status_c" } }
        ],
        orderBy: [
          { fieldName: "submitted_at_c", sorttype: "DESC" }
        ]
      };

      const response = await apperClient.fetchRecords('contact_submission_c', params);
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching contact submissions:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      return [];
    }
  },

  async getSubmissionById(id) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "name_c" } },
          { field: { Name: "email_c" } },
          { field: { Name: "company_c" } },
          { field: { Name: "project_type_c" } },
          { field: { Name: "message_c" } },
          { field: { Name: "submitted_at_c" } },
          { field: { Name: "status_c" } }
        ]
      };

      const response = await apperClient.getRecordById('contact_submission_c', id, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching contact submission:", error?.response?.data?.message);
        throw new Error(error.response.data.message);
      } else {
        console.error(error);
        throw error;
      }
    }
  },

  async updateSubmissionStatus(id, status) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Only include Updateable fields
      const params = {
        records: [{
          Id: parseInt(id),
          status_c: status
        }]
      };

      const response = await apperClient.updateRecord('contact_submission_c', params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to update contact submissions ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
          
          failedRecords.forEach(record => {
            record.errors?.forEach(error => {
              throw new Error(`${error.fieldLabel}: ${error}`);
            });
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulRecords[0]?.data || null;
      }
      
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error updating contact submission:", error?.response?.data?.message);
        throw new Error(error.response.data.message);
      } else {
        console.error(error);
        throw error;
      }
    }
  }
};

export default contactService;