import { useState } from 'react';
import { MessageSquare, Filter } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { mockInquiries } from '../../data/mockOrders';
import { formatDate } from '../../utils/helpers';
import { INQUIRY_STATUS } from '../../utils/constants';
import { toast } from 'react-toastify';

const InquiryManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const filteredInquiries = statusFilter === 'all'
    ? inquiries
    : inquiries.filter(inquiry => inquiry.status === statusFilter);

  const getStatusBadgeClass = (status) => {
    const classes = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      quoted: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
  };

  const handleRespond = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const handleUpdateStatus = (inquiryId, newStatus) => {
    setInquiries(inquiries.map(inq =>
      inq.id === inquiryId ? { ...inq, status: newStatus } : inq
    ));
    toast.success('Inquiry status updated');
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gray-100 min-h-screen">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Inquiry Management</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inquiries List */}
            <div className="lg:col-span-2">
              <Card>
                {/* Filter Bar */}
                <div className="mb-6 flex items-center gap-4">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Inquiries</option>
                    {Object.entries(INQUIRY_STATUS).map(([key, value]) => (
                      <option key={value} value={value}>
                        {key.charAt(0) + key.slice(1).toLowerCase()}
                      </option>
                    ))}
                  </select>
                  <span className="text-sm text-gray-600">
                    {filteredInquiries.length} inquiries
                  </span>
                </div>

                {/* Inquiries Table */}
                <div className="space-y-4">
                  {filteredInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedInquiry?.id === inquiry.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{inquiry.customerName}</p>
                          <p className="text-sm text-gray-500">{inquiry.email}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(inquiry.status)}`}>
                          {inquiry.status}
                        </span>
                      </div>
                      <p className="font-medium text-sm mb-1">{inquiry.subject}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{inquiry.message}</p>
                      <p className="text-xs text-gray-500 mt-2">{formatDate(inquiry.date)}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Inquiry Detail */}
            <div className="lg:col-span-1">
              {selectedInquiry ? (
                <Card>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-5 h-5 text-primary-600" />
                      <h2 className="text-lg font-bold">Inquiry Details</h2>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-gray-500">Customer Name</p>
                        <p className="font-medium">{selectedInquiry.customerName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="font-medium">{selectedInquiry.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="font-medium">{selectedInquiry.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="font-medium">{formatDate(selectedInquiry.date)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Subject</p>
                        <p className="font-medium">{selectedInquiry.subject}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Message</p>
                        <p className="text-sm text-gray-700">{selectedInquiry.message}</p>
                      </div>
                    </div>

                    {selectedInquiry.response && (
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <p className="text-xs text-green-600 mb-1">Response</p>
                        <p className="text-sm">{selectedInquiry.response}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          Responded on {formatDate(selectedInquiry.responseDate)}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Update Status
                      </label>
                      <select
                        value={selectedInquiry.status}
                        onChange={(e) => handleUpdateStatus(selectedInquiry.id, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        {Object.entries(INQUIRY_STATUS).map(([key, value]) => (
                          <option key={value} value={value}>
                            {key.charAt(0) + key.slice(1).toLowerCase()}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button fullWidth className="mt-4">
                      Send Response
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Select an inquiry to view details</p>
                </Card>
              )}
            </div>
          </div>

          {/* Inquiry Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {Object.entries(INQUIRY_STATUS).map(([key, value]) => {
              const count = inquiries.filter(i => i.status === value).length;
              return (
                <Card key={value} hover>
                  <p className="text-sm text-gray-600 mb-1 capitalize">{key.toLowerCase()}</p>
                  <p className="text-2xl font-bold text-gray-900">{count}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
