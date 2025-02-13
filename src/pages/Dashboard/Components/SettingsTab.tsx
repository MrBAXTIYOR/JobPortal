import React, { useState, useEffect } from 'react';
import {
  User,
  Link as LinkIcon,
  Settings,
  Upload,
  FileText,
  Edit2,
  Trash2,
  MoreVertical,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Plus,
  X,
  MapPin,
  Phone,
  Mail,
  Eye,
  EyeOff,
} from 'lucide-react';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

const SettingsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('social');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { id: 1, platform: 'Facebook', url: '' },
    { id: 2, platform: 'Twitter', url: '' },
    { id: 3, platform: 'Instagram', url: '' },
    { id: 4, platform: 'Youtube', url: '' },
  ]);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [profilePrivacy, setProfilePrivacy] = useState<boolean>(true);
  const [resumePrivacy, setResumePrivacy] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const addSocialLink = () => {
    const newId = Math.max(...socialLinks.map((link) => link.id)) + 1;
    setSocialLinks([
      ...socialLinks,
      { id: newId, platform: 'Facebook', url: '' },
    ]);
  };

  const removeSocialLink = (id: number) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  const updateSocialLink = (id: number, field: 'platform' | 'url', value: string) => {
    setSocialLinks(
      socialLinks.map((link) =>
        link.id === id ? { ...link, [field]: value } : link,
      ),
    );
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook':
        return <Facebook size={18} className="text-blue-600" />;
      case 'Twitter':
        return <Twitter size={18} className="text-blue-400" />;
      case 'Instagram':
        return <Instagram size={18} className="text-pink-500" />;
      case 'Youtube':
        return <Youtube size={18} className="text-red-500" />;
      default:
        return <LinkIcon size={18} className="text-gray-400" />;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'social':
        return (
          <div className="space-y-6">
            {socialLinks.map((link, index) => (
              <div key={link.id} className="space-y-2">
                <label className="block text-sm text-gray-700">
                  Social Link {index + 1}
                </label>
                <div className="flex gap-4">
                  <div className="w-40">
                    <select
                      value={link.platform}
                      onChange={(e) =>
                        updateSocialLink(link.id, 'platform', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Youtube">Youtube</option>
                    </select>
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      {getSocialIcon(link.platform)}
                    </div>
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) =>
                        updateSocialLink(link.id, 'url', e.target.value)
                      }
                      placeholder="Profile link/url..."
                      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => removeSocialLink(link.id)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={addSocialLink}
              className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-600 hover:border-gray-400 flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Add New Social Link
            </button>

            <div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Nationality
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <Calendar
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Gender
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Marital Status
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Select...</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Education
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Experience
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Select...</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Biography
              </label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="border-b border-gray-300 p-2 flex gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <span className="font-bold">B</span>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <span className="italic">I</span>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <span className="underline">U</span>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <span className="line-through">S</span>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <LinkIcon size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <div className="w-4 h-4 flex items-center">
                      <div className="w-full border-t border-current"></div>
                    </div>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <div className="w-4 h-4 flex flex-col justify-center gap-1">
                      <div className="border-t border-current"></div>
                      <div className="border-t border-current"></div>
                      <div className="border-t border-current"></div>
                    </div>
                  </button>
                </div>
                <textarea
                  placeholder="Write down your biography here. Let the employers know who you are..."
                  className="w-full p-3 min-h-[200px] focus:outline-none"
                ></textarea>
              </div>
            </div>

            <div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        );
      case 'personal':
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Basic Information</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Profile Picture
                  </label>
                  <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <div className="text-sm">
                      <span className="text-gray-900 font-medium">
                        Browse photo
                      </span>
                      <span className="text-gray-500"> or drop here</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      A photo larger than 400 pixels work best. Max photo size 5
                      MB.
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Title/headline
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Experience
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option>Select...</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Educations
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option>Select...</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Personal Website
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-blue-500">
                      <span className="pl-3">
                        <LinkIcon size={18} className="text-gray-400" />
                      </span>
                      <input
                        type="url"
                        className="w-full px-3 py-2 focus:outline-none"
                        placeholder="Website url..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">Your CV/Resume</h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-blue-600" />
                      <div>
                        <div className="font-medium">Professional Resume</div>
                        <div className="text-sm text-gray-500">3.5 MB</div>
                      </div>
                    </div>
                    <button className="text-gray-400 p-1">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg relative">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-blue-600" />
                      <div>
                        <div className="font-medium">Product Designer</div>
                        <div className="text-sm text-gray-500">4.7 MB</div>
                      </div>
                    </div>
                    <button
                      className="text-gray-400 p-1 relative z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(!showDropdown);
                      }}
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  {showDropdown && (
                    <div className="absolute right-2 top-12 bg-white shadow-lg rounded-md border border-gray-100 py-1 w-32 z-20">
                      <button className="w-full px-4 py-1.5 text-sm text-left hover:bg-gray-50 flex items-center gap-2">
                        <Edit2 size={14} className="text-blue-600" />
                        <span className="text-blue-600">Edit Resume</span>
                      </button>
                      <button className="w-full px-4 py-1.5 text-sm text-left hover:bg-gray-50 flex items-center gap-2">
                        <Trash2 size={14} className="text-red-500" />
                        <span className="text-red-500">Delete</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-blue-600" />
                      <div>
                        <div className="font-medium">Visual Designer</div>
                        <div className="text-sm text-gray-500">1.3 MB</div>
                      </div>
                    </div>
                    <button className="text-gray-400 p-1">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                <div className="border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                  <button className="flex flex-col items-center text-gray-500">
                    <Upload size={24} className="mb-1" />
                    <div className="font-medium">Add CV/Resume</div>
                    <div className="text-xs text-center">
                      Browse file or drop here, only pdf
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <>
            <section className="bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Contact Info</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Map Location
                  </label>
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 border-r">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="flex-1 p-2 outline-none"
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone
                  </label>
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 border-r">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </span>
                    <select className="px-3 py-2 border-r outline-none">
                      <option>+880</option>
                    </select>
                    <input
                      type="tel"
                      className="flex-1 p-2 outline-none"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 border-r">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      type="email"
                      className="flex-1 p-2 outline-none"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Notification</h2>

              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span>Notify me when employers shortlisted me</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Notify me when my applied jobs are expire</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span>Notify me when I have up to 5 job alerts</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <span>Notify me when employers rejected me</span>
                </label>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Job Alerts</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your job roles"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="City, state, country name"
                  />
                </div>
              </div>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Profile Privacy</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setProfilePrivacy(!profilePrivacy)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        profilePrivacy ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          profilePrivacy ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600">
                      Your profile is {profilePrivacy ? 'public' : 'private'} now
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Resume Privacy</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setResumePrivacy(!resumePrivacy)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        resumePrivacy ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          resumePrivacy ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600">
                      Your resume is {resumePrivacy ? 'public' : 'private'} now
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full p-2 border rounded-md pr-10"
                      placeholder="Password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md pr-10"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md pr-10"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Delete Your Account
              </h2>
              <p className="text-gray-600 mb-4">
                If you delete your account, you will no longer be able to get
                information about the matched jobs, following employers, and job
                alert, shortlisted jobs and more. You will be deactivated from
                all the services.
              </p>
              <button className="text-red-600 border border-red-600 px-4 py-2 rounded-md hover:bg-red-50">
                Close Account
              </button>
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h1 className="text-xl font-medium mb-6">Settings</h1>

        <div className="flex overflow-x-auto border-b mb-6 -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => setActiveTab('personal')}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap ${
              activeTab === 'personal' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <User  size={18} /> <span>Personal</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap ${
              activeTab === 'profile' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <User  size={18} /> <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap ${
              activeTab === 'social'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            <LinkIcon size={18} /> <span>Social Links</span>
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap ${
              activeTab === 'account'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            <Settings size={18} /> <span>Account Setting</span>
          </button>
        </div>

        {renderTabContent()}
      </div>

      <footer className="text-center text-gray-500 text-sm mt-8">
        © 2021 Jobpilot - Job Board. All rights Reserved
      </footer>
    </div>
  );
}

export default SettingsTab;