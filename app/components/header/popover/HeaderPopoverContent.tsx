import HeaderPopoverContentItem from './HeaderPopoverContentItem';

export default function HeaderPopoverContent() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <HeaderPopoverContentItem
        to="/story"
        title="Our story"
        image="/images/cookies.jpeg"
        index={0}
      />
      <HeaderPopoverContentItem
        to="/hospitality"
        title="Hospitality"
        image="/images/cookie-bowl-tea.jpeg"
        index={1}
      />
      <HeaderPopoverContentItem
        to="/corporate"
        title="Corporate"
        image="/images/cookie-hand.jpg"
        index={2}
      />
      <HeaderPopoverContentItem
        to="/blogs"
        title="Blog"
        image="/images/cookie-tea.jpeg"
        index={3}
      />
      <HeaderPopoverContentItem
        to="/contact"
        title="Contact"
        image="/images/cookie-bowl.jpeg"
        index={4}
      />
    </div>
  );
}
