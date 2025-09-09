// Contact Service for handling form submissions
class ContactService {
  constructor() {
    this.submissions = [];
    this.nextId = 1;
  }

  // Simulate API call with delay
  async submitForm(formData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo purposes
        // In production, this would be a real API call
        const isSuccess = Math.random() > 0.1; // 90% success rate
        
        if (isSuccess) {
          const submission = {
            Id: this.nextId++,
            ...formData,
            submittedAt: new Date().toISOString(),
            status: 'received'
          };
          
          this.submissions.push(submission);
          resolve(submission);
        } else {
          reject(new Error('Network error occurred'));
        }
      }, 1000); // Simulate network delay
    });
  }

  // Get all submissions (for admin purposes)
  async getAllSubmissions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.submissions]);
      }, 300);
    });
  }

  // Get submission by ID
  async getSubmissionById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const submission = this.submissions.find(s => s.Id === parseInt(id));
        if (submission) {
          resolve({ ...submission });
        } else {
          reject(new Error('Submission not found'));
        }
      }, 300);
    });
  }

  // Update submission status
  async updateSubmissionStatus(id, status) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const submissionIndex = this.submissions.findIndex(s => s.Id === parseInt(id));
        if (submissionIndex !== -1) {
          this.submissions[submissionIndex].status = status;
          this.submissions[submissionIndex].updatedAt = new Date().toISOString();
          resolve({ ...this.submissions[submissionIndex] });
        } else {
          reject(new Error('Submission not found'));
        }
      }, 300);
    });
  }
}

// Create singleton instance
export const contactService = new ContactService();
export default contactService;