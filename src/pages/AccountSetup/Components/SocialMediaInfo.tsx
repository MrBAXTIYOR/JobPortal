import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Plus, X } from 'lucide-react';

const SocialMediaInfo = () => {
  const [socialLinks, setSocialLinks] = useState([
    { platform: 'facebook', url: '' },
    { platform: 'twitter', url: '' },
    { platform: 'instagram', url: '' },
    { platform: 'youtube', url: '' },
  ]);

  const handleSocialLinkChange = (index: number, value: string) => {
    setSocialLinks((prev) =>
      prev.map((link, i) => (i === index ? { ...link, url: value } : link)),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(socialLinks);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="h-5 w-5 text-[#1877F2]" />;
      case 'twitter':
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
      case 'instagram':
        return <Instagram className="h-5 w-5 text-[#E4405F]" />;
      case 'youtube':
        return <Youtube className="h-5 w-5 text-[#FF0000]" />;
      default:
        return null;
    }
  };

  const getPlatformName = (platform: string) => {
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={link.platform} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Social Link {index + 1}
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-36">
                      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                        {getPlatformIcon(link.platform)}
                        <span className="text-sm text-gray-700">
                          {getPlatformName(link.platform)}
                        </span>
                      </div>
                    </div>
                    <div className="relative flex-grow">
                      <input
                        type="url"
                        value={link.url}
                        onChange={(e) =>
                          handleSocialLinkChange(index, e.target.value)
                        }
                        placeholder="Profile link/url..."
                        className="w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-sm outline-none focus:outline-none"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                        onClick={() => handleSocialLinkChange(index, '')}
                      >
                        <X className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add New Social Link
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="button"
                className="order-2 sm:order-1 w-full sm:w-auto px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Previous
              </button>
              <button
                type="submit"
                className="order-1 sm:order-2 w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                Save & Next
                <span className="text-lg">→</span>
              </button>
            </div>
          </form>
       
  );
};
export default SocialMediaInfo;
